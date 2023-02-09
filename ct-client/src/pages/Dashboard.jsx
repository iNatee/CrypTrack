import React, { useState,  useEffect } from 'react';


 function Dashboard() {
	
	const API = "https://api.coingecko.com/api/v3/coins/bitcoin";
	const UsingFetch = () => {
  	const [records, setRecords] = useState([])

  	const fetchData = () => {
  		
    fetch(API)
      .then(response => {
        return response.json()
      })

      .then(data => {
        setRecords(data)
      })
  }


  useEffect(() => {

    fetchData()

  }, []);

	    return (
	        <div className='pg-content'>
		    <div className='pg-header'>Dashboard</div>
		    <div className='pg-body'>
		    <div>
	    		{records.length > 0 && (
	    			<ul>
	    			{records.map(record => (
	    				<li key = {record.id}>{record.name}</li> 
	    				))}
	    			</ul>
	    			)}
	    		</div>
			</div>
		</div>
    	)
	}
}
export default Dashboard
