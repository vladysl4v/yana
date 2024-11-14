interface ClassNameArgs {
    className?: string | undefined;
}

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

export type ClassNameProps = Partial<ClassNameArgs>;

export type WithClasses<T> = Optional<Required<T> & ClassNameArgs, "className">;

export type OptionalWithClasses<T, K extends keyof T> = Optional<Required<T> & ClassNameArgs, "className" | K>;