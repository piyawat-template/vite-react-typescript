import React, { FunctionComponent } from 'react'

import { ICardProps } from '../types/index'

function About() {
  const Card: FunctionComponent<ICardProps> = ({ label, children }) => {
    return (
      <div className="border border-gray-500 rounded-lg p-5 backdrop-blur-lg bg-white bg-opacity-10">
        <h2 className="mb-2">{label}</h2>
        {children}
      </div>
    )
  }

  return (
    <section>
      <div className="container">
        <div className="py-12">
          <h1 className="mb-8">About</h1>

          <Card label="Hi, I'm Nut👋">
            <>
              <p className="mb-5">{`I'm just try to made react + typescript on Vite⚡`}</p>
              <a
                href="https://github.com/piyawat-template/vite-react-typescript"
                target="_blank"
                className="underline"
                rel="noreferrer">
                Github Repo.
              </a>
            </>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default About
