import React, { useState } from "react";
/* import { connect } from "react-redux"; */

import { Alert, Container, Row, Col, Button } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";

import UserDetailModal from "./userdetailmodal";
import FlexDetailModal from "./flexdetailmodal";

/* import { fetchPersons, postPerson } from "../actions"; */

const cellOptions = { false: "Non-privileged", true: "Privileged" };

function PersonAdminView({ persons }) {
  const [editUserDetails, setUserDetails] = useState(null);
  const [editFlexDetails, setFlexDetails] = useState(null);
  const [editProjectPrefs, setProjectPrefs] = useState(null);
  const [changePassword, setChangePassword] = useState(null);

  const columnsProp = [
    {
      dataField: "personId",
      text: "Person Id",
      headerStyle: { width: "10%" },
      hidden: false
    },
    {
      dataField: "info",
      text: "Personal details",
      headerStyle: { width: "20%" },
      editable: false,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(row);
          setUserDetails(row);
        }
      }
    },
    {
      dataField: "flex",
      text: "Flex hours",
      headerStyle: { width: "20%" },
      editable: false,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(row);
          setFlexDetails(row);
        }
      }
    },
    {
      dataField: "projects",
      text: "Projects",
      headerStyle: { width: "20%" },
      editable: false
    },
    {
      dataField: "rights",
      text: "Privileged",
      headerStyle: { width: "20%" },
      editable: false
    },
    {
      dataField: "password",
      text: "Password",
      headerStyle: { width: "10%" },
      editable: false,
      events: {
        onClick: (e, column, columnIndex, row, rowIndex) => {
          console.log(row);
        }
      },

      formatter: (cellContent, row) => <Button>Change Password</Button>
    }
  ];

  return (
    <>
      {editUserDetails && (
        <UserDetailModal
          user={editUserDetails}
          onSave={user => {
            if (user != null) {
              console.log("save pressed");
              console.log(user);
            }
            setUserDetails(null);
          }}
        />
      )}
      {editFlexDetails && (
        <FlexDetailModal
          user={editFlexDetails}
          onSave={user => {
            if (user != null) {
              console.log("save pressed");
              console.log(user);
            }
            setFlexDetails(null);
          }}
        />
      )}

      <BootstrapTable
        bordered
        striped
        bootstrap4
        keyField="personId"
        data={persons}
        columns={columnsProp}
        cellEdit={this.cellEditProp}
      />
    </>
  );
}

export default function index() {
  const props = {
    persons: [
      {
        personId: 1,
        info: "Aapeli [ apel ]",
        fullname: "Aapeli Root",
        email: "apel@ap.fi"
      },
      {
        personId: 2,
        info: "Kiipeli [ kpl ]",
        fullname: "Kiipeli Ruut",
        email: "ruut@ap.fi"
      },
      {
        personId: 3,
        info: "Repeli [ rebel ]",
        fullname: "Rebel Roosna",
        email: "roosna@ap.fi"
      }
    ]
  };
  return PersonAdminView(props);
}
