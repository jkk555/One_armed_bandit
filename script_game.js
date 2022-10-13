let wylosowane_zdjecie = [];
let n = 0;
let money = 600;
let rate_number = 10;
let credit = 59;
function main()
{
    test();

    add_credit()

        if (money>0)
        {
    switch (rate_number)
    {
        case 10:
            money-=10;
            break;
        case 25:
            money-=25;
            break;
        case 100:
            money-=100;
            break;
    }
        }

    if (money>0)
    {
        credit -= 1;
        generate("photo1");
        generate("photo2");
        generate("photo3");
    }
    else
    {

    }

    setMoney();
    document.getElementById('money').innerHTML = "Money: "+money;
    document.getElementById('credit').innerHTML = "Do kredytu zostało: "+credit;

    n = 0;
    
}
function test()
{
    document.getElementById("money_sent").innerText = money;

    let x = new XMLHttpRequest();

}

function rate1_add()
{
    rate_number = 10;
    credit = 59;
    document.getElementById('rates').innerHTML = "Stawka: "+rate_number;
    document.getElementById('credit').innerHTML = "Do kredytu zostało: "+credit;
}
function rate2_add()
{
    rate_number = 25;
    credit = 59;
    document.getElementById('rates').innerHTML = "Stawka: "+rate_number;
    document.getElementById('credit').innerHTML = "Do kredytu zostało: "+credit;
}
function rate3_add()
{
    rate_number = 100;
    credit = 59;
    document.getElementById('rates').innerHTML = "Stawka: "+rate_number;
    document.getElementById('credit').innerHTML = "Do kredytu zostało: "+credit;
}

function add_credit()
{
    if (credit%60===0)
    {
        credit = 60;
        money += 500;
    }
}

function generate(name_photo)
{
   
    let slot = document.getElementById(name_photo);
    
    
    let ticket = Math.floor(Math.random()*9)+1;
    
    wylosowane_zdjecie[n] = ticket;
    
    switch(ticket)
        
        {
            case 1:
                slot.style.backgroundImage = "url(Images/strawberry.png)";
            break;
               
            case 2:
                 slot.style.backgroundImage = "url(Images/grapes.png)";
            break;
                
            case 3:
                 slot.style.backgroundImage = "url(Images/orange.png)";
            break;
                
            case 4:
                 slot.style.backgroundImage = "url(Images/plum.png)";
            break;
            case 5:
                slot.style.backgroundImage = "url(Images/pomegranate.png)";
                break;
            case 6:
                slot.style.backgroundImage = "url(Images/pineapple.png)";
                break;
            case 7:
                slot.style.backgroundImage = "url(Images/cherry.png)";
                break;
            case 8:
                slot.style.backgroundImage = "url(Images/blackberry.png)";
                break;
            case 9:
                slot.style.backgroundImage = "url(Images/watermelon.png)";
                break;
        }
    
    n = n+1;

}

function setMoney()
{
    if(n>=3 && (wylosowane_zdjecie[0] ===  wylosowane_zdjecie[1] && wylosowane_zdjecie[1] ===  wylosowane_zdjecie[2]) )
        {
            switch(wylosowane_zdjecie[0])
                {
                    case 1:
                        money = money + 25;
                        money = (money*rate_number)/10;
                    break
                        
                    case 2:
                        money = money + 50;
                        money = (money*rate_number)/10;
                    break
                    
                    case 3:
                        money = money + 75;
                        money = (money*rate_number)/10;
                    break
                    
                    case 4:
                        money = money + 100;
                        money = (money*rate_number)/10;
                    break
                    case 5:
                        money = money + 125;
                        money = (money*rate_number)/10;
                        break
                    case 6:
                        money = money + 150;
                        money = (money*rate_number)/10;
                        break
                    case 7:
                        money = money + 200;
                        money = (money*rate_number)/10;
                        break
                    case 8:
                        money = money + 300;
                        money = (money*rate_number)/10;
                        break
                    case 9:
                        money = money + 500;
                        money = (money*rate_number)/10;
                        break
                        
                        
                }

        }
}


