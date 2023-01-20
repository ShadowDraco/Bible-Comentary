import React from "react"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"

import { useCheckServerHealthy } from "../customHooks/useCheckServerHealthy"

export default function CheckServerHealthButton() {
  const { serverHealthyData, isServerHealthyLoading, refetchServerHealthy } =
    useCheckServerHealthy()

  return (
    <Container>
      <Button onClick={refetchServerHealthy}>Check server health</Button>
      {isServerHealthyLoading ? (
        <p>Loading...</p>
      ) : (
        <p style={{ color: "green" }}>
          {serverHealthyData?.status} {serverHealthyData?.message}
        </p>
      )}
    </Container>
  )
}
