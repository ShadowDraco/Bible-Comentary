import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"

import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function SignupForm() {
  const [hidden, setHidden] = useState(true)

  const changeHidden = () => {
    setHidden(!hidden)
  }

  const schema = yup.object().shape({
    username: yup.string().min(4).required("Your username is required"),
    password: yup.string().min(5).max(20).required("Your password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords Don't Match")
      .required(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = data => {
    console.log("signing up user!")
    axios
      .post("http://localhost:8000/signup", {
        username: data.username,
        password: data.password,
        groupLeader: false,
        groupCodes: {},
        admin: false,
      })
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <Container className=" mt-2 mb-5">
      <h3 className="text-start hover" onClick={changeHidden}>
        Sign up to Bible App
      </h3>

      {!hidden ? (
        <Container>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <p className="text-danger">{errors?.username?.message}</p>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="username"
                placeholder="Username..."
                {...register("username")}
              />
              <Form.Text className="text-muted">
                We'll never share your information with anyone
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p className="text-danger">{errors?.password?.message}</p>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password..."
                {...register("password")}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
              <p className="text-danger">{errors?.confirmPassword?.message}</p>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password..."
                {...register("confirmPassword")}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      ) : (
        ""
      )}
    </Container>
  )
}
