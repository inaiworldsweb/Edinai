import { useState } from 'react'
import './App.css'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import StudentLoginPage from './pages/StudentLoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import DeveloperPage from './pages/developer'
import EdInaiPage from './pages/EdInaiPage'
import NoCodeDevelopmentPage from './pages/NoCodeDevelopmentPage'
import InaiMarketingPage from './pages/InaiMarketingPage'
import InaiCorporateAgentPage from './pages/InaiCorporateAgentPage'

function App() {
  const [view, setView] = useState('landing')

  if (view === 'login') {
    return (
      <LoginPage
        onBack={() => setView('landing')}
        onStudentLogin={() => setView('studentLogin')}
        onAdminLogin={() => setView('adminLogin')}
        onDeveloperLogin={() => setView('developer')}
        onEdInai={() => setView('edInai')}
        onNoCodeDevelopment={() => setView('noCodeDevelopment')}
        onInaiMarketing={() => setView('inaiMarketing')}
        onInaiCorporateAgent={() => setView('inaiCorporateAgent')}
      />
    )
  }

  if (view === 'edInai') {
    return <EdInaiPage onBack={() => setView('landing')} />
  }

  if (view === 'noCodeDevelopment') {
    return <NoCodeDevelopmentPage onBack={() => setView('landing')} />
  }

  if (view === 'inaiMarketing') {
    return <InaiMarketingPage onBack={() => setView('landing')} />
  }

  if (view === 'inaiCorporateAgent') {
    return <InaiCorporateAgentPage onBack={() => setView('landing')} />
  }

  if (view === 'studentLogin') {
    return (
      <StudentLoginPage
        onBack={() => setView('login')}
        onAdminLogin={() => setView('adminLogin')}
        onEdInai={() => setView('edInai')}
        onNoCodeDevelopment={() => setView('noCodeDevelopment')}
        onInaiMarketing={() => setView('inaiMarketing')}
        onInaiCorporateAgent={() => setView('inaiCorporateAgent')}
      />
    )
  }

  if (view === 'adminLogin') {
    return (
      <AdminLoginPage
        onBack={() => setView('login')}
        onEdInai={() => setView('edInai')}
        onNoCodeDevelopment={() => setView('noCodeDevelopment')}
        onInaiMarketing={() => setView('inaiMarketing')}
        onInaiCorporateAgent={() => setView('inaiCorporateAgent')}
      />
    )
  }

  if (view === 'developer') {
    return (
      <DeveloperPage
        onBack={() => setView('login')}
        onAdminLogin={() => setView('adminLogin')}
        onEdInai={() => setView('edInai')}
        onNoCodeDevelopment={() => setView('noCodeDevelopment')}
        onInaiMarketing={() => setView('inaiMarketing')}
        onInaiCorporateAgent={() => setView('inaiCorporateAgent')}
      />
    )
  }

  return (
    <LandingPage
      onLogin={() => setView('login')}
      onEdInai={() => setView('edInai')}
      onNoCodeDevelopment={() => setView('noCodeDevelopment')}
      onInaiMarketing={() => setView('inaiMarketing')}
      onInaiCorporateAgent={() => setView('inaiCorporateAgent')}
    />
  )
}

export default App
