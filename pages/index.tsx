import type { NextPage } from 'next'
import Head from 'next/head'
import TaskList from '../components/TaskList'
import { Container, Heading, Stack } from '@chakra-ui/react'
import TaskAddForm from '../components/TaskAddForm'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Container my='32px'>
          <Stack spacing='32px'>
            <Heading>TASK LIST</Heading>
            <TaskAddForm />
            <TaskList />
          </Stack>
        </Container>
      </main>
    </div>
  )
}

export default Home
