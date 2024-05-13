import { Calendar } from '@mantine/dates';

import { useState } from 'react';
import { MonthPicker } from '@mantine/dates';

const AddCourses = () => {
    const [value, setValue] = useState(null);

    return (
        <div class="flex gap-4 flex-wrap w-3/5 h-full">
            <Calendar />
            <MonthPicker value={value} onChange={setValue} />;
            <button class="text-rose-900 h-fit bg-white" id="btn">Add Courses</button>
        </div>
    )
}
export default AddCourses