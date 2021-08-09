import { auth } from '@/plugins/firebase'

export default function ({ route, redirect }) {

  auth.onAuthStateChanged((user) => {
    if (user) {
      if (route.name === 'login') {
        redirect('/')
      }
    } else if (route.name !== 'login') {
      redirect('/login')
    }
  })
}
