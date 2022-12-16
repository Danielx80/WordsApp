

import { ColumnsProps } from "../interface";

import styles from '../Table.module.css'
import AvatarUsers from '../AvatarUsers/AvatarUsers';
import TimeZone from '../TimeZone/TimeZone';
import { RoundBtn } from '../../Button/RoundButton/RoundButton';

export const columns:ColumnsProps[] = [
    {
        field:'check',
        headerName:'check',
        width:'5%',
        renderCell: (params, action)=><input className={styles.input} type='checkbox' defaultChecked={params.check} onChange={(e)=>action(e)}/>
    },
    {
        field:'user',
        headerName:'User',
        width:'25%',
        renderCell: (params, action)=>
        <div className={styles.containerAvatar}>
            <AvatarUsers size='md' text={params.first_name}
                backgroundColor='var(--teal500)'
                createBy={`${params.first_name} ${params.last_name}`}
                emailUser={params.email} />
        </div>
    },
    {
        field:'phone',
        headerName:'Phone',
        width:'19%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.telephone}</p>
    },
    {
        field:'birthday',
        headerName:'Birthday',
        width:'13%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.date_of_birth}</p>
    },
    {
        field:'language',
        headerName:'Language',
        width:'14%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.language}</p>
    },
    {
        field:'Timezone',
        headerName:'Timezone',
        width:'23%',
        renderCell: (params, action)=><div className={styles.styleBody}><TimeZone size="md" time={params.time_zone} zone={params.time_zone}/></div>
    }
    ,
    {
        field:'actions',
        headerName:'',
        width:'3%',
        renderCell: (params, action)=><div className={styles.containerAvatar}><RoundBtn iconName='DotsThree'/></div>
    }
]