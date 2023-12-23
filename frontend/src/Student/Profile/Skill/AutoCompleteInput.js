import React, { useState, useEffect, useContext } from 'react';
import { StudentProfileContext } from '../../../Context/context';
import axios from 'axios';
import { apis } from '../../../Apis/apis';

const AutoCompleteInput = () => {
  const { availableSkills, detect, setDetect, studentId } = useContext(StudentProfileContext);

  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState(availableSkills);
  const [suggestionsVisible, setSuggestionVisible] = useState(true)

  useEffect(() => {
    const filteredSuggestions = availableSkills.filter((item, index) =>
      item.skillName.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  }, [inputValue]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = async () => {
    const find = availableSkills.filter((item, index) => item.skillName.toLowerCase() === inputValue.toLocaleLowerCase());

    if(find.length > 0)
      console.log("Already Present");
    else{
      await axios.post(apis.addSkill, {skillName: inputValue.toUpperCase(), studentSkills:[]})
      .then((res) => {
        // detect ? setDetect(false) : setDetect(true)
      })
      .catch((err)=>{
        console.log(err)
      })
    }
    
    const skillId = null;
    await axios.get(`${apis.getSkillId}/${inputValue}`)
    .then((res) => {
      console.log(res.data)
      axios.post(`${apis.getSkillOfStudent}/${studentId}/skill/${res.data}`)
      .then((response) => {
        detect ? setDetect(false) : setDetect(true);
      })
      .catch((error) => {

      })
    })
    .catch((err) => {

    })
    

    setSuggestionVisible(true);
    setInputValue('');
  };

  const handleKeyDownEvent = (e) => {
        if(e.key === 'Enter')
            handleAddItem();
  }

  return (
    <div className="relative inline-block text-left">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDownEvent}
        placeholder="Type here..."
        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:border-blue-500"
      />
      { suggestionsVisible && inputValue.length > 0 && suggestions.length > 0 && (
        <ul className="absolute z-10 mt-2 w-40 bg-white rounded-md shadow-md">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              className="cursor-pointer py-2 px-3 hover:bg-gray-100" onClick={() => { setInputValue(item.skillName); setSuggestionVisible(false) }}
            >
              {item.skillName}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleAddItem}
        className="ml-2 my-2 bg-slate-700 text-white rounded-md px-3 py-2 hover:bg-slate-800 focus:outline-none"
      >
        Add Skill
      </button>
    </div>
  );
};

export default AutoCompleteInput;
