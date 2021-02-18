import useRequest from '../lib/request';
import { Dropdown, Calendar, Loader, Message } from 'rsuite';
import moment from 'moment';

function DayChooser(props) {

    const [monthState, setMonthUrl] = useRequest(null, null);
    console.log(monthState);

    const getMonth = date => {
        setMonthUrl(`${props.config.apiUrl}/${props.station.key}/month/${date}`);
    };
    const renderCell = date => {
        const days = monthState.data.days.filter(day => {
            day.date == moment(date).format('YYYY-MM-DD')
        });
        console.log(days);
        if (days.length) {
            return <div>{days[0].songs_count}</div>;
        }
        return null;
    };

    return (
        <Dropdown title="Date" onOpen={() => getMonth(props.date)}>
            {monthState.error && <Message showIcon type="error" title="Fehler" description={monthState.error.message} />}
            {monthState.loading && (
                <Loader size="lg" center />
            )}
            {!monthState.loading && monthState.data && (
                <Calendar compact bordered renderCell={renderCell} style={{width: '300px'}} />
            )}
        </Dropdown>
    )
}

export default DayChooser;