import AddForm from 'components/Form/addForm'
import { dummyData } from 'utils/index'

export default function Home({ data }) {
	// TODO: Converted into readable as JSON Object
	const results = JSON.parse(data)

	return (
		<>
			<AddForm {...results} />
		</>
	)
}

// TODO: Fetching API data with server side rendering
export const getServerSideProps = async () => {
	try {
		const myApi = process.env.myApi
		const apiKey = process.env.apiKey

		const res = await fetch(myApi, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-API-KEY': apiKey,
			},
		})

		const json = await res.json()

		return {
			props: {
				data: JSON.stringify(json.data) || dummyData,
			},
		}
	} catch (error) {
		return {
			props: {},
		}
	}
}
