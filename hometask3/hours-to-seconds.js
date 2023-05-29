const hours = prompt('Enter the number of hours')

if (hours !== null && !isNaN(hours)) {
    const seconds = hours * 60 * 60

    alert('Number of seconds: '+ seconds)

}