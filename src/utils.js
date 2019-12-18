export const convertTemp = (temp, type) => {
    if (type === 'c') {
        return Number((((temp - 32) * 5) / 9).toFixed(2));
    }
    return temp;
};

export const groupWeatherData = list => {
    const data = [];
    (list || []).forEach(item => {
        const segment = {};
        const dateStr = item.dt_txt.split(' ')[0];
        const existingSegment = data.find(d => d.day === dateStr);
        if (existingSegment) {
            existingSegment.segments.push(item);
            existingSegment.averagetemp = (existingSegment.segments.reduce((acc, segment) => (acc + segment.main.temp), 0) / existingSegment.segments.length).toFixed(2);
        } else {
            segment.day = dateStr;
            segment.segments = [item];
            data.push(segment);
        }
    });

    return data;
}