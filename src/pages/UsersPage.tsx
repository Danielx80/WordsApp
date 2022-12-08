import { useEffect, useContext, useState } from 'react';
import { useQuery } from 'react-query'
import { getUsers, } from '../api/MicroServiceOne';
import { useAuth0 } from '@auth0/auth0-react';
import "../assets/css/users.css";
import Context from '../context/Context';
import H2 from '../components/Typhography/H2';
import { InputSearch } from '../components/InputSearch/InputSearch';
import { RoundBtn } from '../components/Button/RoundButton/RoundButton';
import BasicBtn from '../components/Button/BasicButton/BasicButton';
import Table from '../components/Table'
import dataColumns from '../components/Table/data/dataTable.json'

export const UsersPage = () => {

  const { isReady } = useContext(Context)

  // const { data, isLoading, error, isError, isFetching, } = useQuery('useUsers', getUsers)
  const { isAuthenticated, user /*getAccessTokenSilently*/ } = useAuth0();

  useEffect(() => {
    // if
    (isAuthenticated)

  }, [isAuthenticated, isReady]);

  const [show, setShow] = useState(true);

  if (!isReady) {
    return <></>
  }
  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      <div className="containerUser">
        <div className="containerHeaderUsers">
          <div className="titleUsers">
            <H2 variant="bold">Users</H2>
            <BasicBtn
              size='md'
              backgroundColor='var(--celeste700)'
              colorText='var(--white)'
              text='New User'
            />
          </div>
          <div className="space-text"></div>
        </div>
        <div className='containerSearch'>

          <InputSearch
            size='md'
            type='text'
            text='Search User'
            icon='MagnifyingGlass'
            onChange={() => { }}
          />
          <div className='roundsButton'>

            <RoundBtn iconName='ListBullets' />
            <RoundBtn iconName='SquaresFour' />
            <div style={{ marginLeft: 24 }}>
              <RoundBtn iconName='DotsThreeOutline' />
            </div>
          </div>

        </div>

        <div className='containerTable'>
          <Table data={dataColumns} />
        </div>
      </div>
    </div>
  )

}
