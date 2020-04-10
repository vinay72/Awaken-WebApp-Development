const LS_KEY = {
    auth_token: "auth",
    child_data: "child_data",
    default_child: "default_child",
    parent_data: "parent_data",
};

const set = {
    authToken: data => {
        localStorage.setItem(
            LS_KEY.auth_token,
            JSON.stringify({
                auth_token: data
            })
        );
    },
    childData: data => {
        localStorage.setItem(
            LS_KEY.child_data,
            JSON.stringify({
                child_data: data
            })
        );
    },
    defaultChild: data => {
        localStorage.setItem(
            LS_KEY.default_child,
            JSON.stringify({
                default_child: data
            })
        );
    },
    parentData: data => {
        localStorage.setItem(
            LS_KEY.parent_data,
            JSON.stringify({
                parent_data: data
            })
        );
    }
};

const fetch = {
    authToken: () => {
        const data = localStorage.getItem(LS_KEY.auth_token);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.auth_token;
            } catch (err) {
                console.log(err);
            }
        }
    },
    childData: () => {
        const data = localStorage.getItem(LS_KEY.child_data);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.child_data;
            } catch (err) {
                console.log(err);
            }
        }
    },
    defaultChild: () => {
        const data = localStorage.getItem(LS_KEY.default_child);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.default_child;
            } catch (err) {
                console.log(err);
            }
        }
    },
    parentData: () => {
        const data = localStorage.getItem(LS_KEY.parent_data);
        if (data) {
            try {
                const decoded = JSON.parse(data);
                return decoded.parent_data;
            } catch (err) {
                console.log(err);
            }
        }
    }
};

const destroy = {
    authToken: () => {
        localStorage.removeItem(LS_KEY.auth_token);
    },
    childData: () => {
        localStorage.removeItem(LS_KEY.child_data);
    },
    defaultChild: () => {
        localStorage.removeItem(LS_KEY.default_child);
    },
    parentData: () => {
        localStorage.removeItem(LS_KEY.parent_data);
    },
    all: () => {
        localStorage.removeItem(LS_KEY.auth_token);
        localStorage.removeItem(LS_KEY.child_data);
        localStorage.removeItem(LS_KEY.default_child);
        localStorage.removeItem(LS_KEY.parent_data);
    }
};

export const storage = {
    set,
    fetch,
    destroy
};
