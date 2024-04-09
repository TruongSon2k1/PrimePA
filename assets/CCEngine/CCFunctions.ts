
cc.instance = function<T>(obj: cc.ClassType<T>): T | null
{
    return obj['__get_pts_instance__']()
}
