import { Container, CssBaseline, Typography } from '@mui/material'
import Head from 'next/head'
import Link from '@mui/material/Link'

function Layout({ title, keywords, description, children }) {
	return (
		<>
			<Head>
				<meta
					name='viewport'
					content='initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
				/>
				<meta charSet='utf-8' />
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
				<link
					rel='stylesheet'
					href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
				/>
				<title>{title}</title>
			</Head>
			<Container
				maxWidth='sm'
				sx={{
					boxShadow: 3,
					p: 5,
					minHeight: '100vh',
					bgcolor: { xs: 'gold', md: '#FAFAFA' },
				}}
			>
				<CssBaseline />
				<Typography
					component='h3'
					variant='h5'
					textAlign='center'
					color='secondary'
				>
					Auto Adding Lottery Histories
				</Typography>
				{children}
				<Link
					href='https://github.com/chanmyaemaung'
					rel='noopener'
					target='_blank'
					underline='none'
				>
					<Typography
						textAlign='center'
						my={1.5}
						component='p'
						variant='body2'
						color='gray'
					>
						&copy; PJK - DEV {new Date().getFullYear()}.
					</Typography>
				</Link>
			</Container>
		</>
	)
}

Layout.defaultProps = {
	title: 'Chen - Cron Calendar',
	keywords: 'auto submit form, cron, 2dform',
	description: 'This is an automatic cron job built with NEXT JS',
}

export default Layout
