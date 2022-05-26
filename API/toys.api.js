import constants from './constants';

class ToysApi {
  async getAllToys() {
    try {
      const response = await fetch(
        `${constants.base_url}/${constants.path}?_sort=species`,
      );
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
  async findToys(name) {
    try {
      const response = await fetch(
        `${constants.base_url}/${constants.path}?q=${name}&_sort=species`,
      );
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async findToy(name, description = '') {
    try {
      const response = await fetch(
        `${constants.base_url}/${constants.path}?name=${name}&description=${description}`,
      );
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async createToy(params) {
    try {
      const response = await fetch(`${constants.base_url}/${constants.path}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async updateToy(id, params) {
    try {
      const response = await fetch(
        `${constants.base_url}/${constants.path}/${id}`,
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(params),
        },
      );
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }

  async deleteToy(id) {
    try {
      const response = await fetch(
        `${constants.base_url}/${constants.path}/${id}`,
        {
          method: 'DELETE',
        },
      );
      return await response.json();
    } catch (e) {
      console.error(e);
    }
  }
}

export default new ToysApi();
