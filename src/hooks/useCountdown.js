import { useEffect, useState } from 'react';
import moment from 'moment-jalaali';

const useCountdown = (futureDate) => {
    const [countdown, setCountdown] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const now = moment();
            const future = moment(futureDate, 'jYYYY/jMM/jDD HH:mm:ss');

            if (future.diff(now) > 0) {
                const duration = moment.duration(future.diff(now));
                const days = duration.days().toString().padStart(2, '0');
                const hours = duration.hours().toString().padStart(2, '0');
                const minutes = duration.minutes().toString().padStart(2, '0');
                const seconds = duration.seconds().toString().padStart(2, '0');

                setCountdown(
                    {
                        days,
                        hours,
                        minutes,
                        seconds
                    }
                );
            } else {
                setCountdown({
                    days: '00',
                    hours: '00',
                    minutes: '00',
                    seconds: '00'
                });
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [futureDate]);

    return countdown;
};

export default useCountdown;
