var config = {
    username: 'username',
    password: 'password',
    pages: {
        'confluence.site.com/login.action': {
            'username_node_id': 'os_username',
            'username': '{username}',
            'password_node_id': 'os_password',
            'password': '{password}',
            'submit_button_node_id': 'loginButton'
        },
        'jira.site.com/login.jsp': {
            'username_node_id': 'login-form-username',
            'username': '{username}',
            'password_node_id': 'login-form-password',
            'password': '{password}',
            'submit_button_node_id': 'login-form-submit'
        },
        'blitzkrieg.site.com/ldap/login': {
            'username_node_id': 'username',
            'username': '{username}',
            'password_node_id': 'password',
            'password': '{password}',
            'submit_form_node_id': 'loginForm'
        }
    }
};

Object.keys(config.pages).forEach(function(key) {
    var page = config.pages[key];
    page.username = config.username;
    page.password = config.password;
});
