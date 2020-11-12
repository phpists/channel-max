import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import Breadcrumbs from '../../components/Common/Breadcrumb';
import DeleteChannelDialog from './DeleteChannelDialog';
import { connect } from "react-redux";
import Actions from './../../store/actions';
import { Link } from "react-router-dom";
import selectors from './../../selectors';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import { validate } from './../../helpers/validation'
import {
	TabContent,
	TabPane,
	Nav,
	Card,
	CardBody,
	CardTitle,
	NavItem,
	NavLink,
	Button,
	Row,
	Col,
	FormGroup,
	Container,
} from 'reactstrap';
import "./channels.scss";

const ChannelSettings = React.memo((props) => {
	const { activeChannel, onChannelUpdate } = props

	const [activeTab, setActiveTab] = useState('1');
	const [channelName, setChannelName] = useState(activeChannel?.name || '')
	const [channelDomain, setChannelDomain] = useState(activeChannel?.domain || '')
	const [channelSubDomain, setChannelSubDomain] = useState(activeChannel?.subdomain || '')
	const [modal, setModal] = useState(false);

	const customValidation = (value) => {
		return validate.isChannelNameValid(value) ? true : `The field must not contain spaces.`
	};

	const customDomainValidation = (value) => {
		if (value) {
			return validate.isChannelNameValid(value) ? true : `The field must not contain spaces.`
		} else {
			return true
		}
	};

	useEffect(() => {
		if (activeChannel) {
			setChannelName(activeChannel?.name)
			setChannelDomain(activeChannel?.domain || '')
			setChannelSubDomain(activeChannel?.subdomain || '')
		}
	}, [activeChannel])

	const toggle = () => setModal(!modal);

	const toggleTab = tab => {
		if (activeTab !== tab) setActiveTab(tab);
	}

	const onSubmit = () => {

		onChannelUpdate({
			id: activeChannel.id,
			name: channelName,
			domain: channelDomain,
			subdomain: channelSubDomain,
		})
	}

	const renderChannelSettings = () => {
		return (
			<Row className="align-items-start">
				<Col xs="12" sm="4" md="3" lg="2" className="mb-2">
					<Nav className="border-0" vertical pills tabs >
						<NavItem className="bg-white text-center w-100 mx-auto">
							<NavLink
								className={classnames({ active: activeTab === '1' })}
								onClick={() => { toggleTab('1'); }}>General</NavLink>
						</NavItem>
						<NavItem className="bg-white mt-2 text-center w-100 mx-auto">
							<NavLink
								className={classnames({ active: activeTab === '2' })}
								onClick={() => { toggleTab('2'); }}>Other</NavLink>
						</NavItem>
						<NavItem className="mt-2 border-0 w-100">
							<Button outline color="danger" className="d-block w-100 mx-auto" onClick={toggle}>Delete Project</Button>
							<DeleteChannelDialog
								{...{ channelName, modal, setModal, toggle }}
								channelId={activeChannel.id} />
						</NavItem>
					</Nav>
				</Col>
				<Col xs="12" sm="8" md="9" lg="10">
					<TabContent activeTab={activeTab}>
						<TabPane tabId="1">
							<AvForm onValidSubmit={(e, v) => { onSubmit(e, v) }}>
								<Card>
									<CardBody>
										<div className="form-group">
											<AvField
												name="name"
												className="form-control"
												placeholder="Your film, show, company name. You can change this later"
												type="text"
												required
												label="Title"
												value={channelName}
												onChange={(event) => { setChannelName(event.target.value) }}
												validate={{ customValidation }}
											/>
										</div>
										<div className="form-group">
											<AvField
												name="domain"
												className="form-control"
												placeholder="Channels domain"
												type="text"
												label="Domain"
												value={channelDomain}
												onChange={(event) => { setChannelDomain(event.target.value) }}
												validate={{ customDomainValidation }}
											/>
										</div>
										<div className="form-group">
											<AvField
												name="subdomain"
												className="form-control"
												placeholder="Channels subdomain"
												type="text"
												label="Subdomain"
												value={channelSubDomain}
												onChange={(event) => { setChannelSubDomain(event.target.value) }}
												validate={{ customValidation }}
											/>
										</div>
									</CardBody>
								</Card>
								<Row className="justify-content-end mt-3" >
									<FormGroup>
										<Button className="btn-size-130 mr-3" color="secondary">Cancel</Button>
										<Button className="btn-size-130 mr-3" color="primary" onClick={onSubmit} type="submit">Save</Button>
									</FormGroup>
								</Row>
							</AvForm>
						</TabPane>
						<TabPane tabId="2">
							<Card>
								<CardBody>Other</CardBody>
							</Card>
						</TabPane>
					</TabContent>
				</Col>
			</Row>
		)
	}

	const renderEmptyChannlsMessage = () => (
		<div className="overlay">
			<CardBody>
				<CardTitle className="text-center mb-3 mt-3">You haven`t any channels yet.</CardTitle>
				<div className="text-center mb-3">
					<Link to="/channels/create">
						<Button color="primary" className="waves-effect">
							<i className="bx bx-plus font-size-16 align-middle mr-2" />Creacte a new project
						</Button>
					</Link>
				</div>
			</CardBody>
		</div>
	)

	return (
		<>
			<div className="page-content">
				<Container fluid>
					<Breadcrumbs title={"dashboard"} breadcrumbItem={"channel settings"} />
					{(Boolean(activeChannel)) ? renderChannelSettings() : renderEmptyChannlsMessage()}
				</Container>
			</div>
		</>
	)
})


const mapStatetoProps = state => ({
	activeChannel: selectors.channels.activeChannel(state),
})

const mapDispatchToProps = (dispatch) => ({
	onChannelUpdate: (data) => dispatch(Actions.channels.updateChannelRequest(data)),
})

export default connect(mapStatetoProps, mapDispatchToProps)(ChannelSettings);