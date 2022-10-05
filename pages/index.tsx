// Utils

// Layouts
import PageLayout from "../layouts/page/page.layout"

// Components
import Head from "next/head"

// Types
import { ReactElement } from "react"

const Home = () => {
	return (
		<>
			<Head>
				<title>Basilisk</title>
				<meta name="description" content="" />
			</Head>

			<h1>Hello world</h1>
		</>
	)
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
	return <PageLayout>{page}</PageLayout>
}
