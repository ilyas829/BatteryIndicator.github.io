/*=============== BATTERY ===============*/
initBattery()

function initBattery(){
    const batteryLiquid = document.querySelector('.battery-liquid'), 
          batteryStatus = document.querySelector('.battery-status'),
          batteryPercentage = document.querySelector('.battery-perce')
   
    navigator.getBattery().then((batt) =>{
        updateBattery = () =>{
              let level = Math.floor(batt.level*100)
              batteryPercentage.innerHTML = level +'%'
                batteryLiquid.style.height = `${parseInt(batt.level*100)}%`

              if(level == 100){
                batteryStatus.innerHTML = `Full Battery <i class="ri-battery-2-fill green-color"></i>`
                batteryLiquid.style.height = '103%'
              }
              else if(level <= 20 &! batt.charging){
                batteryStatus.innerHTML = `Low Battery <i class="ri-plug-2-line animated-red"></i>`
              }
              else if(batt.charging){
                batteryStatus.innerHTML = `Charging .. .. <i class="ri-battery-2-charge-line animated-green"></i>`
              }
              else{
                batteryStatus.innerHTML = ''
              }

              if(level <= 20){
                batteryLiquid.classList.add('gradient-color-red');
                batteryLiquid.classList.remove('gradient-color-orange','gradient-color-yellow','gradient-color-green');
              }
              else if(level <= 40){
                batteryLiquid.classList.add('gradient-color-orange')
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-yellow','gradient-color-green')
              }
              else if (level <= 80){
                batteryLiquid.classList.add('gradient-color-yellow');
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green');
              }
              else{
                batteryLiquid.classList.add('gradient-color-green');
                batteryLiquid.classList.remove('gradient-color-red','gradient-color-orange','gradient-color-green');
              }
        }
        updateBattery()
        batt.addEventListener('chargingchange',() => {updateBattery()})
        batt.addEventListener('levelchange',()=>{updateBattery()})
      })
}
