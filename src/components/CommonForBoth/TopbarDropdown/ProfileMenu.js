import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import user1 from '../../../assets/images/users/avatar-1.jpg';
import Actions from './../../../store/actions'

const ProfileMenu = (props) => {
	const [menu, setMenu] = useState(false);

 	const onLogOut = () => {
		 sessionStorage.clear()
		 props.logOut()
		 props.history.push('/')
	 }

	return (
		<React.Fragment>
			<Dropdown isOpen={menu} toggle={() => setMenu(!menu)} className="d-inline-block" >
				<DropdownToggle className="btn header-item waves-effect" id="page-header-user-dropdown" tag="button">
					<img className="rounded-circle header-profile-user" src={user1} alt="Header Avatar" />
					<span className="d-none d-xl-inline-block ml-2 mr-1">User Name</span>
					<i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
				</DropdownToggle>
				<DropdownMenu right>
					<Link to="/profile" className="dropdown-item">
						<i className="bx bx-user font-size-16 align-middle mr-1"></i>
						{props.t('Profile')}
					</Link>
					{/* <DropdownItem tag="a" href="/crypto-wallet"><i className="bx bx-wallet font-size-16 align-middle mr-1"></i>{props.t('My Wallet')}</DropdownItem> */}
					{/* <DropdownItem tag="a" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings font-size-17 align-middle mr-1"></i>{props.t('Settings')}</DropdownItem> */}
					{/* <DropdownItem tag="a" href="auth-lock-screen"><i className="bx bx-lock-open font-size-16 align-middle mr-1"></i>{props.t('Lock screen')}</DropdownItem> */}
					<div className="dropdown-divider"></div>
					<DropdownItem onClick={() => onLogOut()}>
						<i className="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
						<span>{props.t('Logout')}</span>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</React.Fragment>
	);
}

const mapDispatchToProps = (dispatch) => ({
	logOut: () => dispatch(Actions.authorization.logOut())
})

export default withRouter(connect(null, mapDispatchToProps)(withNamespaces()(ProfileMenu)));

