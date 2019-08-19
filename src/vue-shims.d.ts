declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
declare module "*.ts"

declare module Vue {
    export interface V {
        $fn(): any,
    }
}