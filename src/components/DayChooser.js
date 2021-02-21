import useRequest from '../lib/request';
import { Dropdown, Calendar, Loader, Tag } from 'rsuite';
import moment from 'moment';
import { useContext, useState } from 'react';
import ConfigContext from '../ConfigContext';

function DayChooser(props) {

    const [context] = useContext(ConfigContext);
    const [monthState, setMonthUrl] = useRequest(null, null);
    const [open, setOpen] = useState(false);

    const getMonth = date => {
        setMonthUrl(`${context.config.apiUrl}/${context.station.key}/month/${date}`);
    };
    const renderCell = date => {
        if (!monthState.data) {
            return null;
        }
        const days = monthState.data.days.filter(day => {
            return day.date === moment(date).format('YYYY-MM-DD')
        });
        if (days.length) {
            return <Tag style={{color: 'grey'}}>{days[0].songs_count}</Tag>;
        }
        return null;
    };
    const onSelect = date => {
        if (props.onSelect) {
            props.onSelect(moment(date).format('YYYY-MM-DD'));
        }
        setOpen(false);
    };

    const calendarBlur = monthState.loading ? {filter: 'blur(8px)'} : {};

    return (
        <Dropdown title="Date" onClick={() => setOpen(!open)} open={open} onOpen={() => getMonth(props.date)}>
            <Calendar compact bordered defaultValue={moment(props.date).toDate()}
                    onChange={date => getMonth(moment(date).format('YYYY-MM-DD'))} 
                    onSelect={date => onSelect(moment(date).format('YYYY-MM-DD'))} 
                    renderCell={renderCell} 
                    style={{...calendarBlur, width: '400px'}} />
            {monthState.loading && (
                <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        right: 0,
                        zIndex: 100
                    }}>
                    <Loader center />
                </div>
            )}
        </Dropdown>
    )
}

export default DayChooser;