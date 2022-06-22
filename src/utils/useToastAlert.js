import { toast } from 'react-toastify'

const useToastAlert = () => {
  const ToastAlert = ({
    id, message, type, autoClose = false
  }) => toast(message, {
    toastId: id,
    type: type ?? toast.TYPE.INFO,
    position: 'top-right',
    autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    pauseOnFocusLoss: false,
  })

  const ToastUpdate = ({
    id, message, type, autoClose = false
  }) => toast.update(id, {
    render: message,
    type: type ?? toast.TYPE.INFO,
    autoClose,
  })

  const ToastDismiss = ({ id }) => toast.dismiss(id ?? null)

  return {
    ToastAlert,
    ToastUpdate,
    ToastDismiss,
  }
}

export default useToastAlert
