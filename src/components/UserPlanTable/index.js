import React, { useEffect, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

//helpers
import { readCookie } from '../../helper/cookie';

//Styling
import './UserPlanTable.css';

function UserPlanTable(props) {
  const {
    heading,
    isTitle,
    showActions,
    isLink,
    data,
    filterTied,
    filterDraft,
    showTableHead,
  } = props;
  const isMentor = readCookie('validateType');
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data);
  }, [data]);

  function idpClickHandler(e) {
    e.preventDefault();
    let idpId = e.target.href.split('/').reverse()[0];
    props.history.push(`/dashboard/idp/${idpId}`);
  }

  function renderForMentor() {
    return (
      <div className="user-plan-table-body">
        {datas ? (
          datas.map((item, index) => {
            return (
              <div key={index}>
                <p className="user-plan-table-sn">{index + 1}</p>
                {!isLink ? (
                  <p className="user-plan-table-title">{item.contact.name}</p>
                ) : (
                  <Link
                    onClick={idpClickHandler}
                    to={`/dashboard/idp/${item.id}`}
                    className="user-plan-table-title"
                  >
                    {item.contact.name}
                  </Link>
                )}
              </div>
            );
          })
        ) : (
          <p>You currently do not have any mentee tied to you.</p>
        )}
      </div>
    );
  }

  function renderForMentee() {
    return (
      <div className="user-plan-table-body">
        {datas ? (
          datas.map((item, index) => {
            return (
              <div key={index}>
                <p className="user-plan-table-sn">{index + 1}</p>
                {!isLink ? (
                  <p className="user-plan-table-title">{item.title}</p>
                ) : (
                  <Link
                    to={`/dashboard/idp/:${item._id}`}
                    className="user-plan-table-title"
                  >
                    {item.title}
                  </Link>
                )}
                <p className="user-plan-table-action">
                  {showActions ? (
                    <>
                      <button className="user-plan-action-edit">
                        <i className="mdi mdi-pencil"></i>&nbsp;Edit
                      </button>
                      <button className="user-plan-action-delete">
                        <i className="mdi mdi-delete"></i>&nbsp;Delete
                      </button>{' '}
                    </>
                  ) : (
                    ''
                  )}
                </p>
              </div>
            );
          })
        ) : (
          <p>
            Get Started. Create a Development Plan to be sent along with your
            requests.
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="user-plan-table">
      <p>
        <img alt="planning" src="/assets/img/planning.svg" />
        {heading}
      </p>
      {showTableHead ? (
        <section>
          <button className="active" onClick={filterTied}>
            Tied
          </button>
          <button onClick={filterDraft}>Draft</button>
        </section>
      ) : null}
      <div className="user-plan-table-header">
        <div className="user-plan-table-head user-plan-table-sn">S/N</div>
        <div className="user-plan-table-head user-plan-table-title">
          {isTitle ? 'Title' : 'Mentees'}
        </div>
        {showActions ? (
          <div className="user-plan-table-head user-plan-table-action">
            Actions
          </div>
        ) : (
          <div className="user-plan-table-head user-plan-table-action">
            &nbsp;
          </div>
        )}
      </div>
      {isMentor ? renderForMentor() : renderForMentee()}
    </div>
  );
}

export default withRouter(UserPlanTable);
