const PARAMS = {
    fixtureSet: 'fs',
    search: 'q',
    status: 'st',
    sort: 'sort',
    sortDir: 'dir',
    sortEl: 'sel',
    test: 'test',
};

export function readState() {
    const p = new URLSearchParams(window.location.search);
    return {
        fixtureSet: p.get(PARAMS.fixtureSet) || '',
        search: p.get(PARAMS.search) || '',
        status: p.get(PARAMS.status) || 'all',
        sort: p.get(PARAMS.sort) || 'name',
        sortDir: p.get(PARAMS.sortDir) || 'asc',
        sortEl: p.get(PARAMS.sortEl) || '',
        test: p.get(PARAMS.test) || '',
    };
}

export function pushState(state) {
    const p = new URLSearchParams();
    if (state.fixtureSet) p.set(PARAMS.fixtureSet, state.fixtureSet);
    if (state.search) p.set(PARAMS.search, state.search);
    if (state.status && state.status !== 'all') p.set(PARAMS.status, state.status);
    if (state.sort && state.sort !== 'name') p.set(PARAMS.sort, state.sort);
    if (state.sortDir && state.sortDir !== 'asc') p.set(PARAMS.sortDir, state.sortDir);
    if (state.sortEl) p.set(PARAMS.sortEl, state.sortEl);
    if (state.test) p.set(PARAMS.test, state.test);
    const qs = p.toString();
    const url = qs ? `?${qs}` : window.location.pathname;
    window.history.pushState(null, '', url);
}
