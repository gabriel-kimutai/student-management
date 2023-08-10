export const load = ({ locals }: { locals: any }) => {
  if (locals.user) {
    return {
      user: locals.user,
      imageUrl: locals.pb.files.getUrl(locals.user, locals.user.avatar),
      userList: locals.userList,
    };
  }
  return {
    user: undefined,
    imageUrl: null
  };
};
