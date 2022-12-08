import Avatar from "../../Avatar";
import AvatarUsers from "../AvatarUsers/AvatarUsers";
import { ColumnsProps } from "../interface";
import styles from '../Table.module.css'
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
            <AvatarUsers size='md' text={params.name}
                backgroundColor='var(--teal500)'
                createBy={`${params.name} ${params.lastname}`}
                emailUser={params.email} />
        </div>
    },
    {
        field:'phone',
        headerName:'Phone',
        width:'20%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.phone}</p>
    },
    {
        field:'birthday',
        headerName:'Birthday',
        width:'12%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.birthday}</p>
    },
    {
        field:'language',
        headerName:'Language',
        width:'15%',
        renderCell: (params, action)=><p className={styles.styleBody}>{params.language}</p>
    },
    {
        field:'Timezone',
        headerName:'Timezone',
        width:'20%',
        renderCell: (params, action)=><div className={styles.styleBody}><TimeZone size="md" time={params.time} zone={params.zone}/></div>
    }
    ,
    {
        field:'actions',
        headerName:'',
        width:'20%',
        renderCell: (params, action)=><div className={styles.containerAvatar}><RoundBtn iconName='DotsThree'/></div>
    }
]