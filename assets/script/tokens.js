 
/**
 * Cos I didn't want to choke myself keeping up with similar looking HTML,
 * I decided to render the HTML using javascript
 * Here I also had to create two tables, with quite a lot of text, and I didn't 
 * want messy looking html
 */

 
 
 const tokens = [

     {
         productName: "Bitcoin",
        productIcon:  "../assets/images/token_images/bitcoin-icon.png", 
           productAbbrev:"BTC",
         productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         marketCap:"$252,844,036,453 USD",
         volume:"$30,504,879,301 USD",
        

     },

     {
         productName:"Ethereum" ,
        productIcon: "../assets/images/token_images/ethereum-icon.png",
           productAbbrev:"ETH",
         productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         marketCap:"$252,844,036,453 USD",
         volume:"$30,504,879,301 USD",
         
        
        
     },

     {
         productName: "Litecoin",
        productIcon: "../assets/images/token_images/litecoin-icon.png",
           productAbbrev:"LTC",
         productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         marketCap:"$252,844,036,453 USD",
         volume:"$30,504,879,301 USD",
        
        
     },

     {
         productName:"TRON" ,
         productIcon : "../assets/images/token_images/tron-icon.png",
           productAbbrev:"TRX",
         productDescription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
         marketCap:"$252,844,036,453 USD",
         volume:"$30,504,879,301 USD",
                 
     }
    

 ]


 /**
  * Logic that renders the HTML for mobile devices
  */

    tokens.forEach((token)=>{
     const table = document.createElement('table');
     
     const tableContentOne = `
     

                                <thead>
                                    <tr>
                                        <th>name</th>
                                    </tr>
                                </thead>
    
                                <tbody>
                                    <tr>
                                        
                                        <td><img src="${token.productIcon}" alt="product icon"> <p>${token.productName}</p><p>${token.productAbbrev}</p></td>
                                    </tr>
                                    <tr>
                                        <th>description</th>
                                        <td>${token.productDescription}</td>
                                    </tr>
                                    <tr>
                                        <th>market cap</th>
                                        <td>${token.marketCap}</td>
                                    </tr>
                                    <tr>
                                        <th>volume</th>
                                        <td>${token.volume}</td>
                                    </tr>
                                    <tr>
                                        <th>website</th>
                                        <td> <a href="#">Visit website</a></td>
                                    </tr>
                                </tbody>
                            
  `;

  table.innerHTML = tableContentOne;
 
  const mobileTable = document.querySelector(".mobile-table");
    
   mobileTable.appendChild(table);
    });




    /**
     * Logic that renders the HTML for larger devices
     */
    

    tokens.forEach((token)=>{

        const tableBody = document.createElement('tr');
     
     const tableContentTwo = `

     
         <td><img src="${token.productIcon}" alt="product icon"> <p>${token.productName}</p><p>${token.productAbbrev}</p></td>
         <td>${token.productDescription}</td>
         <td>${token.marketCap}</td>
         <td>${token.volume}</td>
         <td><a href="#">Visit website</a></td>
    
                                `



     tableBody.innerHTML = tableContentTwo;
 
     const desktopTableBody = document.querySelector(".desktop-table-body");
       
      desktopTableBody.appendChild(tableBody);

    });



