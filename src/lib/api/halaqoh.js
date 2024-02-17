import API from ".";
export const getAllHalaqoh = async () => {
  return (await API.get("/halaqoh")).data;
};

export const deleteHalaqah = async (id) => {
  return (await API.delete(`/halaqoh/${id}`)).data;
};

export const updateHalaqoh = async (id, {
  nama_halaqoh,
  tahun_ajaran,
  guruId,
  siswaIds,
  status,
}) => {
  return (await API.put(`/halaqoh/${id}`, {
    nama_halaqoh,
    tahun_ajaran,
    guruId,
    siswaIds,
    status
  }))
}
export async function createHalaqoh({
  nama_halaqoh, tahun_ajaran, guruId, siswaIds, status
}) {
  return (
    await API.post("/halaqoh", {
      nama_halaqoh,
      tahun_ajaran,
      guruId,
      siswaIds,
      status
    })
  ).data;
}


export async function getOneHalaqoh(id) {
  return (
    await API.get("/halaqoh-update/" + id)
  )
}