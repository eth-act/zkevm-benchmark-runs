const PARAMS = {
    fixtureSet: 'fs',
    elClient: 'el',
    search: 'q',
    operation: 'op',
    status: 'st',
    sort: 'sort',
    sortDir: 'dir',
    test: 'test',
};

export function readState() {
    const p = new URLSearchParams(window.location.search);
    return {
        fixtureSet: p.get(PARAMS.fixtureSet) || '',
        elClient: p.get(PARAMS.elClient) || 'all',
        search: p.get(PARAMS.search) || '',
        operation: p.get(PARAMS.operation) || '',
        status: p.get(PARAMS.status) || 'all',
        sort: p.get(PARAMS.sort) || 'name',
        sortDir: p.get(PARAMS.sortDir) || 'asc',
        test: p.get(PARAMS.test) || '',
    };
}

export function pushState(state) {
    const p = new URLSearchParams();
    if (state.fixtureSet) p.set(PARAMS.fixtureSet, state.fixtureSet);
    if (state.elClient && state.elClient !== 'all') p.set(PARAMS.elClient, state.elClient);
    if (state.search) p.set(PARAMS.search, state.search);
    if (state.operation) p.set(PARAMS.operation, state.operation);
    if (state.status && state.status !== 'all') p.set(PARAMS.status, state.status);
    if (state.sort && state.sort !== 'name') p.set(PARAMS.sort, state.sort);
    if (state.sortDir && state.sortDir !== 'asc') p.set(PARAMS.sortDir, state.sortDir);
    if (state.test) p.set(PARAMS.test, state.test);
    const qs = p.toString();
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.pushState(null, '', url);
}
