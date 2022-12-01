import { useState } from 'react';

const Captcha = () => {

    const [count, setCount] = useState(false);

    return
        <div className='flex h-screen justify-center items-center'>
            <form>
                <label htmlFor="fname">
                    First name:
                    <input type="text" id="fname" name="fname" />
                </label>
                <label htmlFor="lname">
                    Last name:
                    <input type="text" id="lname" name="lname" />
                </label>
            </form>
        </div>
    ;
};

export default Captcha;