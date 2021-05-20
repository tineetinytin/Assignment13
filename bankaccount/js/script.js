window.onload = function() {
    let bankAccount = (function () {
        let owner = undefined;
        let balance = 0;

        function withdraw() {
            let withdrawalAmount = prompt('Enter amount to withdraw', '100')
            if (isNaN(parseFloat(withdrawalAmount))) {
                alert('Enter Number')
                withdraw()
            } else {
                balance = balance - withdrawalAmount
                getBalance()
            }

        }

        function deposit() {
            let depositAmount = prompt('Enter amount to deposit', '100')
            if (isNaN(parseFloat(depositAmount))) {
                alert('Enter Number')
                deposit()
            } else {
                balance = balance + parseFloat(depositAmount)
                getBalance()
            }
        }

        function getBalance() {
            document.getElementById('balance').value = balance
            return balance
        }

        function getOwnerName() {
            return owner
        }

        function setName(target) {
            owner = prompt("Enter your name")
            document.getElementById('ownerName').value = owner
        }

        return {
            withdraw,
            deposit,
            getBalance,
            getOwnerName,
            setName
        }
    })()

    let clientForm = document.getElementById('clientForm')
    clientForm.addEventListener('click', (e) => {
        e.preventDefault()
        const {target } = e
        if (target.matches('button#name')) {
            bankAccount.setName(target)
            bankAccount.getBalance()
        }
        if (target.matches('button#deposit')) {
            bankAccount.deposit()
        }
        if (target.matches('button#wdraw')) {
            bankAccount.withdraw()
        }
    })


};

