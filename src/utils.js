export const setNotes = async (item, name) => {
  try {
    await localStorage.setItem(name, item);
  } catch (err) {
    console.log(err.message);
  }
};

export const getNotes = async (name) => {
  try {
    await localStorage.getItem(name);
  } catch (err) {
    console.log(err.message);
  }
};

export const delNotes = async (name) => {
  try {
    await localStorage.removeItem(name);
  } catch (err) {
    console.log(err.message);
  }
};
