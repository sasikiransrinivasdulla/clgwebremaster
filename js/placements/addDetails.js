 // Data for each placement detail
 const placementDetails = [
    {
      year: '2022-23',
      src: 'http://srivasaviengg.ac.in/uploads/place_2022-23.pdf#toolbar=0'
    },
    {
      year: '2021-22',
      src: 'http://srivasaviengg.ac.in/uploads/place_2021-22.pdf#toolbar=0'
    },
    {
        year: '2020-21',
        src: 'http://srivasaviengg.ac.in/uploads/place_2020-21.pdf#toolbar=0'
    },
    {
        year: '2019-20',
        src: 'http://srivasaviengg.ac.in/uploads/place_2019-20.pdf#toolbar=0'
    },
    {
        year: '2018-19',
        src: 'http://srivasaviengg.ac.in/uploads/place_2018-19.pdf#toolbar=0'
    },
    {
        year: '2017-18',
        src: 'http://srivasaviengg.ac.in/uploads/place_2017-18.pdf#toolbar=0'
    },
    {
       year: '2016-17',
         src: 'http://srivasaviengg.ac.in/uploads/place_2016-17.pdf#toolbar=0'
    },
    {
        year: '2015-16',
        src: 'http://srivasaviengg.ac.in/uploads/place_2015-16.pdf#toolbar=0'
    },
    // Add more objects as needed
  ];

  // Get the element with class "rest"
  const restElement = document.querySelector('.rest');

  // Function to create and append details elements
  placementDetails.forEach(detail => {
    // Create details element
    const details = document.createElement('details');
    
    // Create summary element
    const summary = document.createElement('summary');
    summary.textContent = `Placement Details of ${detail.year}`;
    details.appendChild(summary);

    // Create div element with class "text-center"
    const div = document.createElement('div');
    div.className = 'text-center';
    
    // Create li element
    const li = document.createElement('li');
    li.textContent = `Placement Details of ${detail.year}`;
    li.style.cssText = `
      margin-left: 25px;
      text-align: center;
      list-style-type: none;
      margin: 10px;
    `;
    div.appendChild(li);

    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = detail.src;
    iframe.width = '60%';
    iframe.height = '500px';
    iframe.className = 'text-center';
    div.appendChild(iframe);

    // Append div to details
    details.appendChild(div);

    // Append details to rest element
    restElement.appendChild(details);
  });