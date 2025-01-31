document.addEventListener('DOMContentLoaded', function() {
    const generalSettingsForm = document.getElementById('generalSettingsForm');
    const securitySettingsForm = document.getElementById('securitySettingsForm');

    generalSettingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const systemName = document.getElementById('systemName').value;
        const adminEmail = document.getElementById('adminEmail').value;
        const timezone = document.getElementById('timezone').value;

        alert(`Settings Saved:\nSystem Name: ${systemName}\nAdmin Email: ${adminEmail}\nTimezone: ${timezone}`);
    });

    securitySettingsForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const passwordPolicy = document.getElementById('passwordPolicy').value;
        const twoFactorAuth = document.getElementById('twoFactorAuth').value;

        alert(`Security Settings Saved:\nPassword Policy: ${passwordPolicy}\nTwo-Factor Authentication: ${twoFactorAuth}`);
    });
});
