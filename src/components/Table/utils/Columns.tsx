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
                <AvatarUsers size='md' text={params.name}
                    backgroundColor='var(--teal500)'
                    createBy={`${params.name} ${params.lastname}`}
                    emailUser={params.email} />
            </div>
    },
    {
        field: 'phone',
        headerName: 'Phone',
        width: '13%',
        renderCell: (params, action) => <p className={styles.styleBody}>{params.phone}</p>
    },
    {
        field: 'birthday',
        headerName: 'Birthday',
        width: '13%',
        renderCell: (params, action) => <p className={styles.styleBody}>{params.birthday}</p>
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

        renderCell: (params, action) => <div className={styles.styleBody}><TimeZone size="md" time={params.timezone} zone={params.timezone} /></div>
    }
    ,
    {
        field: 'actions',
        headerName: '',
        width: '2%',
        renderCell: (params, action) => <div className={styles.containerAvatar}>
            <RoundButtonModal iconName="Pencil" user={params as User} />
        </div>
    }
]