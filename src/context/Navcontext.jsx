import React, { createContext, useState } from 'react'

export const NavbarContext = createContext()
const Navcontext = ({children}) => {
    const [nav, setnav] = useState(false)
  return (
    <div>
        <NavbarContext.Provider value={[nav, setnav]}>
            {children}
        </NavbarContext.Provider>
    </div>
  )
}

export default Navcontext