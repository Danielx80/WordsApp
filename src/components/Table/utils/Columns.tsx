import { ColumnsProps, User } from "../interface";
import styles from '../Table.module.css'
import AvatarUsers from '../AvatarUsers/AvatarUsers';
import TimeZone from '../TimeZone/TimeZone';
import { RoundButtonModal } from '../../Button/BtnModal/ButtonModal';
import { CheckBox } from '../../Button/CheckBox/CheckBox';

export const columns: ColumnsProps[] = [
    {
        field: 'check',
        headerName: 'check',
        width: '5%',
        renderCell: (params, action) => <CheckBox user={params as User} onChange={(e) => action(e, params as User)} defaultChecked={params.check} />
    },
    {
        field: 'user',
        headerName: 'User',
        width: '25%',
        renderCell: (params, action) =>
            <div className={styles.containerAvatar}>
                <AvatarUsers size='md' text={params.first_name}
                    backgroundColor='var(--teal500)'
                    createBy={`${params.first_name} ${params.last_name}`}
                    emailUser={params.email} />
            </div>
    },
    {
        field: 'phone' ,
        headerName: 'Phone',
        width: '13%',
        renderCell: (params, action) => <p className={styles.styleBody}>{params.telephone}</p>
    },
    {
        field: 'birthday',
        headerName: 'Birthday',
        width: '13%',
        renderCell: (params, action) => <p className={styles.styleBody}>{params.date_of_birth}</p>
    },
    {
        field: 'language',
        headerName: 'Language',
        width: '13%',
        renderCell: (params, action) => <p className={styles.styleBody}>{params.language}</p>
    },
    {
        field: 'Time zone',
        headerName: 'TimeZone',
        width: '24%',

        renderCell: (params, action) => <div className={styles.styleBody}><TimeZone size="md" time={params.time_zone} zone={params.time_zone} /></div>
    }
    ,
    {
        field: 'actions',
        headerName: '',
        width: '2%',
        renderCell: (params, action) => <div className={styles.containerEdit}><RoundButtonModal user={params as User} iconName='Pencil' /></div>
    }
]