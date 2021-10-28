import { Button, CircularProgress, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from '@firebase/firestore'
import Layout from '@components/Layout/Layout'
import { db } from '@firebase/firebase'
import { dummyData, getDate } from 'utils/index'

export default function AddForm(results) {
	// TODO: (1) Destructuring API data
	const {
		set_1200,
		set_430,
		val_1200,
		val_430,
		result_1200,
		result_430,
		modern_930,
		modern_200,
		internet_930,
		internet_200,
	} = results

	// TODO: (2) Binding API data with useState hook
	const [add, setAdd] = useState({
		current_date: getDate,
		morning_set: set_1200 || '--',
		morning_val: val_1200 || '--',
		morning_result: result_1200 || '--',
		evening_set: set_430 || '--',
		evening_val: val_430 || '--',
		evening_result: result_430 || '--',
		morning_modern: modern_930 || '--',
		morning_internet: internet_930 || '--',
		evening_modern: modern_200 || '--',
		evening_internet: internet_200 || '--',
	})

	// TODO: (5) Loading State
	const [loading, setLoading] = useState(false)

	// TODO: (3) Add data to firestore
	const handleSubmit = async () => {
		try {
			setLoading(true)
			// TODO: Insert Data
			const collectionRef = collection(db, 'calendar')

			const docRef = await addDoc(collectionRef, {
				...add,
				timestamp: serverTimestamp(),
			})

			setAdd(dummyData)

			alert(`ထည့်သွင်းမှု အိုင်ဒီအမှတ် ${docRef.id} အောင်မြင်ပါသည်။`)

			setLoading(false)
		} catch (error) {
			setLoading(true)
			console.log(error.message)
			setLoading(false)
		}
	}

	// TODO: (4) Debugging
	// console.table(results)

	return (
		<Layout>
			<>
				{/* <pre>{JSON.stringify(add, null, '\t')}</pre> */}
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<TextField
						required
						fullWidth
						label='Date'
						margin='dense'
						variant='outlined'
						value={add.current_date}
						onChange={(e) => setAdd({ ...add, current_date: e.target.value })}
					/>
				</Box>
				{/* နေ့လည် ထွက်ဂဏန်း */}
				<Typography
					component='p'
					variant='inherit'
					textAlign='center'
					color='brown'
				>
					12:01 PM
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<TextField
						required
						fullWidth
						label='SET'
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.morning_set}
						onChange={(e) => setAdd({ ...add, morning_set: e.target.value })}

						// disabled
					/>
					<TextField
						required
						fullWidth
						label='VALUE'
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.morning_val}
						onChange={(e) => setAdd({ ...add, morning_val: e.target.value })}

						// disabled
					/>
					<TextField
						required
						fullWidth
						label='RESULT'
						margin='dense'
						variant='outlined'
						value={add.morning_result}
						onChange={(e) => setAdd({ ...add, morning_result: e.target.value })}

						// disabled
					/>
				</Box>
				{/* ညနေ ၄ခွဲ ထွက်ဂဏန်း */}
				<Typography
					component='p'
					variant='inherit'
					textAlign='center'
					color='brown'
				>
					16:31 PM
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<TextField
						required
						fullWidth
						label='SET'
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.evening_set}
						onChange={(e) => setAdd({ ...add, evening_set: e.target.value })}

						// disabled
					/>
					<TextField
						required
						fullWidth
						label='VALUE'
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.evening_val}
						onChange={(e) => setAdd({ ...add, evening_val: e.target.value })}

						// disabled
					/>
					<TextField
						required
						fullWidth
						label='RESULT'
						margin='dense'
						variant='outlined'
						value={add.evening_result}
						onChange={(e) => setAdd({ ...add, evening_result: e.target.value })}

						// disabled
					/>
				</Box>
				{/* နံနက် မော်ဒန်၊ အင်တာနက် ဂဏန်း */}
				<Typography
					component='p'
					variant='inherit'
					textAlign='center'
					color='brown'
				>
					09:30 AM
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<TextField
						required
						label='MODERN'
						fullWidth
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.morning_modern}
						onChange={(e) => setAdd({ ...add, morning_modern: e.target.value })}
					/>
					<TextField
						required
						label='INTERNET'
						fullWidth
						margin='dense'
						variant='outlined'
						value={add.morning_internet}
						onChange={(e) =>
							setAdd({ ...add, morning_internet: e.target.value })
						}
					/>
				</Box>
				{/* ညနေ မော်ဒန်၊ အင်တာနက် ဂဏန်း */}
				<Typography
					component='p'
					variant='inherit'
					textAlign='center'
					color='brown'
				>
					02:00 PM
				</Typography>
				<Box
					sx={{
						display: 'flex',
						justifyContent: 'space-around',
						alignItems: 'center',
					}}
				>
					<TextField
						required
						label='MODERN'
						fullWidth
						margin='dense'
						variant='outlined'
						sx={{ mr: 1 }}
						value={add.evening_modern}
						onChange={(e) => setAdd({ ...add, evening_modern: e.target.value })}
					/>
					<TextField
						required
						label='INTERNET'
						fullWidth
						margin='dense'
						variant='outlined'
						value={add.evening_internet}
						onChange={(e) =>
							setAdd({ ...add, evening_internet: e.target.value })
						}
					/>
				</Box>
				<Button
					onClick={handleSubmit}
					id='submitForm'
					type='submit'
					fullWidth
					variant='outlined'
					color='secondary'
					disabled={loading}
					endIcon={
						loading ? <CircularProgress color='inherit' size={25} /> : ''
					}
					sx={{ mt: 1 }}
				>
					{loading ? 'Adding data...' : 'Add Data'}
				</Button>
			</>
		</Layout>
	)
}
