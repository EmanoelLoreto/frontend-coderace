import React, {
  useCallback, useEffect, useState
} from 'react'

import axios from 'axios'

import {
  Container,
  ContainerPanel,
  Header,
  Li,
  NavMenus,
  Ul,
  Link,
  ContainerData,
} from './AdminPanelContainer.styles'
import imgFundo from '../../assets/background-about.png'
import imgLogoCodeRace from '../../assets/logo-coderace.png'
import { useLocation, useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${ tableCellClasses.head }`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${ tableCellClasses.body }`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const AdminPanelContainer = () => {
  const apiUrl = process.env.REACT_APP_API_URL
  const location = useLocation()
  const navigate = useNavigate()

  const storageData = localStorage.getItem('authToken')

  const [dataTable, setDataTable] = useState([])
  const [rowsTable, setRowsTable] = useState([])
  const [columnsTable, setColumnsTable] = useState([])

  const getDataTable = useCallback(
    async (path) => {
      try {
        const { data } = await axios.get(`${ apiUrl }/${ path }`, {
          headers: {
            Authorization: storageData,
          }
        })
        setDataTable(data)
      } catch {
        setRowsTable([])
        setColumnsTable([])
      }
    },
    [axios],
  )

  useEffect(() => {
    navigate('#times')
  }, [])

  useEffect(() => {
    switch (location.hash) {
      case '#participantes':
        getDataTable('participantes/listar-participantes')
        break

      case '#contatos':
        getDataTable('contato/listar')
        break

      case '#patrocinios':
        getDataTable('patrocinio/listar')
        break

      case '#usuarios':
        getDataTable('usuarios/listar')
        break

      default:
        getDataTable('times/listar-times')
        break
    }
  }, [location.hash])

  useEffect(() => {
    setRowsTable([])
    const rows = []
    map(dataTable, data => rows.push(data))
    setRowsTable(rows)
  }, [dataTable])

  useEffect(() => {
    const columns = []
    setColumnsTable([])
    rowsTable.forEach((result) => {
      Object.keys(result).forEach((col) => {
        if (!columns.includes(col)) {
          columns.push(col)
        }
      })
      setColumnsTable(columns)
    })
  }, [rowsTable])

  return (
    <Container style={ { backgroundImage: `url( ${ imgFundo } )` } }>
      <ContainerPanel>
        <Header>
          <img
            src={ imgLogoCodeRace }
            alt="Icon"
            onClick={ () => navigate('/') }
          />
          <NavMenus>
            <Ul>
              <Li>
                <Link href="#times" selectedSub={ location.hash === '#times' }>Times</Link>
              </Li>
              <Li>
                <Link href="#participantes" selectedSub={ location.hash === '#participantes' }>Participantes</Link>
              </Li>
              <Li>
                <Link href="#contatos" selectedSub={ location.hash === '#contatos' }>Contatos</Link>
              </Li>
              <Li>
                <Link href="#patrocinios" selectedSub={ location.hash === '#patrocinios' }>Patricinios</Link>
              </Li>
              <Li>
                <Link href="#usuarios" selectedSub={ location.hash === '#usuarios' }>Usuários</Link>
              </Li>
            </Ul>
          </NavMenus>
        </Header>
        <ContainerData>
          { !isEmpty(rowsTable) ? (
            <Table sx={ { minWidth: 700 } } stickyHeader aria-label="table">
              <TableHead>
                <TableRow>
                  {map(columnsTable, (columns, index) => (
                    index !== 0 && (
                      <StyledTableCell key={ columns + index } align="center">{ columns }</StyledTableCell>
                    )
                  ))}
                </TableRow>
              </TableHead>
              <TableBody style={ { backgroundColor: 'aliceblue' } }>
                {map(rowsTable, (row, index) => (
                  <StyledTableRow key={ `${ index }table-row` }>
                    {map(row, (tableLine, nameLine) => (
                      nameLine !== '_id' && (
                        <StyledTableCell key={ tableLine + nameLine } align="center">{tableLine}</StyledTableCell>
                      )
                    ))}
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          ) : (
            <h2>Nenhum dado encontrado</h2>
          )}
        </ContainerData>
      </ContainerPanel>
    </Container>
  )
}

export default AdminPanelContainer
