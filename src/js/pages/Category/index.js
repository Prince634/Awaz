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
        {id: 1, value: 'Top Trending'},
        {id: 2, value: 'Cooking'},
        {id: 3, value: 'Dancing'},
        {id: 4, value: 'Singing'},
        {id: 5, value: 'Audio'},
        {id: 6, value: 'Politics'},
        {id: 7, value: 'News'},
        {id: 8, value: 'Gym Videos'},
        {id: 9, value: 'Motivation'},
        {id: 10, value: 'Religious'},
        {id: 11, value: 'Technology'},
        {id: 12, value: 'Business'},
    ]
    
    return(
        <>
            <Header />
            <div className={container}>
                <div className="title">
                    <p>Choose Categories</p>
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
                    <button type="submit" className={`${selectedLang.length?'':'disabled'}`} onClick={()=>history.push('/language')}>Next</button>
                </div>
                
            </div>
        </>
    )
}

export default Category;