import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';

Admin.propTypes = {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

function Admin(props){
  return (
    <div>
      <h2>Admin</h2>
      <TicketList
        ticketList={props.ticketList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

export default Admin;
