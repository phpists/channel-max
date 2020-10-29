import React, { useEffect } from 'react';
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import profile from "../../assets/images/profile-img.png";
import logo from "../../assets/images/logo.svg";
import Actions from '../../store/actions'
// availity-reactstrap-validation
import { AvForm, AvField } from 'availity-reactstrap-validation';

const Login = (props) => {
	function handleValidSubmit(event, values) {

		const data = {
			emailLogin: values
		}

		props.loginUser(data);
	}

	useEffect(()=>{
		if(props.authData !== null){
			props.history.push('/dashboard')
		}
	}, [props.authData])

	return (
		<React.Fragment>
			<div className="home-btn d-none d-sm-block">
				<Link to="/" className="text-dark"><i className="fas fa-home h2"></i></Link>
			</div>
			<div className="account-pages my-5 pt-sm-5">
				<Container>
					<Row className="justify-content-center">
						<Col md={8} lg={6} xl={5}>
							<Card className="overflow-hidden">
								<div className="bg-soft-primary">
									<Row>
										<Col className="col-7">
											<div className="text-primary p-4">
												<h5 className="text-primary">Welcome Back !</h5>
												<p>Sign in to Bring Stream.</p>
											</div>
										</Col>
										<Col className="col-5 align-self-end">
											<img src={profile} alt="" className="img-fluid" />
										</Col>
									</Row>
								</div>
								<CardBody className="pt-0">
									<div>
										<Link to="/">
											<div className="avatar-md profile-user-wid mb-4">
												<span className="avatar-title rounded-circle bg-light">
													<img src={logo} alt="" className="rounded-circle" height="34" />
												</span>
											</div>
										</Link>
									</div>
									<div className="p-2">
										<AvForm className="form-horizontal" onValidSubmit={(e, v) => { handleValidSubmit(e, v) }}>
											{props.error && props.error ? <Alert color="danger">{props.error}</Alert> : null}
											<div className="form-group">
												<AvField 
													name="email" 
													label="Email" 
													// value="dimakrsna@gmail.com" 
													className="form-control" 
													placeholder="Enter email" 
													type="email" 
													required 
												/>
											</div>
											<div className="form-group">
												<AvField 
													name="password" 
													label="Password" 
													// value="wVDp!H!UmQ6f@NW" 
													type="password" 
													placeholder="Enter Password" 
													required 
												/>
											</div>
											<div className="mt-3">
												<button className="btn btn-primary btn-block waves-effect waves-light" type="submit">Log In</button>
											</div>
											<div className="mt-4 text-center">
												<Link to="/forgot-password" className="text-muted"><i className="mdi mdi-lock mr-1"></i> Forgot your password?</Link>
											</div>
										</AvForm>
									</div>
								</CardBody>
							</Card>
							<div className="mt-5 text-center">
								<p>Don't have an account ? <Link to="register" className="font-weight-medium text-primary"> Signup now </Link> </p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</React.Fragment>
	);
}

const mapStateToProps = (state) => ({
	authData: state.authorization.authData
})

const mapDispatchToProps = dispatch => ({
		loginUser: (data)=> dispatch(Actions.authorization.loginRequest(data))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));

