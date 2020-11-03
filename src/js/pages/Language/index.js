import React, { useState, useCallback } from 'react';
import { container, cardList } from './style.js';
import Header from '../Header';

const Category = ({ history })=>{

    const [selectedLang, setLang] = useState([]);

    const selectLanuages = useCallback((selectedValue)=>{

        let isFound = false;
        const newLang = selectedLang.filter((val)=>{
            if(val===selectedValue.id){
                isFound = true;
                return false;
            }
            return true;
        })
        if(!isFound){
            newLang.push(selectedValue.id);
        }
        setLang(newLang);
    },[selectedLang]);

    const data = [
        {id: 1, value: 'Hindi'},
        {id: 2, value: 'Punjabi'},
        {id: 3, value: 'English'},
        {id: 4, value: 'Tamil'},
        {id: 5, value: 'South'},
        {id: 6, value: 'Marathi'},
        {id: 7, value: 'Gujrati'},
        {id: 8, value: 'French'},
    ]
    
    return(
        <>
            <Header />
            <div className={container}>
                <div className="title">
                    <p>Choose Language</p>
                </div>
                <div className={cardList}>
                    {
                        data.map((val)=>{
                            return <div className={`card ${selectedLang.includes(val.id)?'active':''}`} onClick={()=>selectLanuages(val)}>
                                {val.value}
                            </div>
                        })
                    }
                </div>
                <div className="nextBtn">
                    <button type="submit" className={`${selectedLang.length?'':'disabled'}`} onClick={()=>history.push('/home')}>Next</button>
                </div>
                
            </div>
        </>
    )
}

export default Category;