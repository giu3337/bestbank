import accounts from './data.js';

const accountSection = document.querySelector('#accounts-section');
const spendingSection = document.querySelector('#spendings-section');

// Render all accounts
function renderAccounts() {
    let accountsData = `<h2>Accounts</h2>`;

    accounts.forEach((account, index) => {
        const accountHtml = `
            <div class="account" id="account-${index}">
                <p>${account.title}</p> <p>$ ${account.balance}</p>
            </div>
        `;
        accountsData += accountHtml;
    });

    accountSection.innerHTML = accountsData;

    // Add event listeners to each account
    accounts.forEach((account, index) => {
        document.getElementById(`account-${index}`).addEventListener('click', function() {
            document.querySelectorAll('.account').forEach(el => el.style.backgroundColor = '');
            this.style.backgroundColor = '#FFA724';
        });
    });
}

// Render the first 5 spendings from all accounts
function renderSpendings() {
    let spendingsData = '<h2>Spendings</h2>';

    const allSpendings = accounts.flatMap(account => account.spendings);
    const firstFiveSpendings = allSpendings.slice(0, 5);

    firstFiveSpendings.forEach(spending => {
        const spendingHtml = `
            <div>
                <p>${spending.category}</p> <p>$ ${spending.spent}</p>
            </div>
        `;
        spendingsData += spendingHtml;
    });

    spendingSection.innerHTML = spendingsData;
}

renderAccounts();
renderSpendings();
